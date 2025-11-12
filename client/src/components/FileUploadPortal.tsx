import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useMutation } from '@tanstack/react-query';
import { Upload, FileText, CheckCircle2, AlertCircle, X } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { useToast } from '@/hooks/use-toast';
import { insertFileUploadSchema, type InsertFileUpload } from '@shared/schema';
import { apiRequest } from '@/lib/queryClient';
import { z } from 'zod';

// Extended schema with file object
const fileUploadFormSchema = insertFileUploadSchema.extend({
  file: z.instanceof(File, { message: 'Please select a file to upload' }),
});

type FileUploadFormData = z.infer<typeof fileUploadFormSchema>;

export function FileUploadPortal() {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [isDragging, setIsDragging] = useState(false);
  const { toast } = useToast();

  const form = useForm<FileUploadFormData>({
    resolver: zodResolver(fileUploadFormSchema),
    defaultValues: {
      customerName: '',
      customerEmail: '',
      customerPhone: '',
      serviceType: '',
      notes: '',
      fileName: '',
      fileSize: '',
      fileType: '',
    },
  });

  const uploadMutation = useMutation({
    mutationFn: async (data: InsertFileUpload) => {
      return await apiRequest('POST', '/api/file-uploads', data);
    },
    onSuccess: () => {
      toast({
        title: 'File Submitted Successfully!',
        description: 'Your design files have been received. We will review and contact you shortly.',
      });
      form.reset();
      setSelectedFile(null);
    },
    onError: (error: Error) => {
      toast({
        variant: 'destructive',
        title: 'Submission Failed',
        description: error.message || 'Please try again or contact us directly.',
      });
    },
  });

  const handleFileChange = (file: File | null) => {
    if (!file) {
      setSelectedFile(null);
      return;
    }

    // Validate file size (max 50MB)
    const maxSize = 50 * 1024 * 1024;
    if (file.size > maxSize) {
      toast({
        variant: 'destructive',
        title: 'File Too Large',
        description: 'Maximum file size is 50MB. Please compress or split your files.',
      });
      return;
    }

    // Validate file type
    const allowedTypes = [
      'application/pdf',
      'image/jpeg',
      'image/jpg',
      'image/png',
      'application/zip',
      'application/x-zip-compressed',
      'application/vnd.adobe.illustrator',
      'application/postscript',
    ];
    
    if (!allowedTypes.includes(file.type)) {
      toast({
        variant: 'destructive',
        title: 'Invalid File Type',
        description: 'Please upload PDF, JPG, PNG, AI, or ZIP files only.',
      });
      return;
    }

    setSelectedFile(file);
    
    // Update form with file metadata
    const fileSizeMB = (file.size / (1024 * 1024)).toFixed(2);
    form.setValue('fileName', file.name);
    form.setValue('fileSize', `${fileSizeMB} MB`);
    form.setValue('fileType', file.type);
    form.setValue('file', file);
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    
    const files = e.dataTransfer.files;
    if (files.length > 0) {
      handleFileChange(files[0]);
    }
  };

  const handleRemoveFile = () => {
    setSelectedFile(null);
    form.setValue('fileName', '');
    form.setValue('fileSize', '');
    form.setValue('fileType', '');
  };

  const onSubmit = async (data: FileUploadFormData) => {
    // In a real implementation, you would upload the file to cloud storage (S3, etc.)
    // For this demo, we're just storing the metadata
    const { file, ...uploadData } = data;
    uploadMutation.mutate(uploadData);
  };

  return (
    <section id="upload" className="py-20 md:py-24 bg-card">
      <div className="max-w-4xl mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/20 mb-6">
            <Upload className="w-4 h-4 text-accent" />
            <span className="text-sm font-medium text-accent uppercase tracking-wide">
              File Upload Portal
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Submit Your Design Files
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Upload your print-ready designs or source files. We accept PDF, AI, JPG, PNG, and ZIP formats.
          </p>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Upload Design Files</CardTitle>
            <CardDescription>
              Fill in your details and upload your design files. Maximum file size: 50MB
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                {/* Customer Information */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <FormField
                    control={form.control}
                    name="customerName"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Your Name *</FormLabel>
                        <FormControl>
                          <Input placeholder="John Doe" {...field} data-testid="input-customer-name" />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="customerPhone"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Phone Number *</FormLabel>
                        <FormControl>
                          <Input placeholder="9740007147" {...field} data-testid="input-customer-phone" />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <FormField
                    control={form.control}
                    name="customerEmail"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Email Address *</FormLabel>
                        <FormControl>
                          <Input type="email" placeholder="[email protected]" {...field} data-testid="input-customer-email" />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="serviceType"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Service Type *</FormLabel>
                        <Select onValueChange={field.onChange} value={field.value}>
                          <FormControl>
                            <SelectTrigger data-testid="select-upload-service-type">
                              <SelectValue placeholder="Select service type" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="Offset Digital Printing" data-testid="option-upload-offset-digital">Offset Digital Printing</SelectItem>
                            <SelectItem value="Flex Printing" data-testid="option-upload-flex-printing">Flex Printing</SelectItem>
                            <SelectItem value="Business Cards" data-testid="option-upload-business-cards">Business Cards</SelectItem>
                            <SelectItem value="Brochures" data-testid="option-upload-brochures">Brochures</SelectItem>
                            <SelectItem value="Banners" data-testid="option-upload-banners">Banners</SelectItem>
                            <SelectItem value="Other" data-testid="option-upload-other">Other</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                {/* File Upload Area */}
                <div className="space-y-4">
                  <FormLabel>Design File *</FormLabel>
                  
                  {!selectedFile ? (
                    <div
                      className={`border-2 border-dashed rounded-lg p-12 text-center transition-colors ${
                        isDragging
                          ? 'border-primary bg-primary/5'
                          : 'border-border hover:border-primary/50'
                      }`}
                      onDragOver={handleDragOver}
                      onDragLeave={handleDragLeave}
                      onDrop={handleDrop}
                      data-testid="dropzone-file-upload"
                    >
                      <Upload className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
                      <p className="text-base font-medium mb-2">
                        Drag and drop your file here
                      </p>
                      <p className="text-sm text-muted-foreground mb-4">
                        or click to browse
                      </p>
                      <input
                        type="file"
                        id="file-input"
                        className="hidden"
                        accept=".pdf,.jpg,.jpeg,.png,.ai,.zip"
                        onChange={(e) => handleFileChange(e.target.files?.[0] || null)}
                        data-testid="input-file-hidden"
                      />
                      <label htmlFor="file-input">
                        <Button type="button" variant="outline" onClick={() => document.getElementById('file-input')?.click()} data-testid="button-browse-files">
                          Browse Files
                        </Button>
                      </label>
                      <p className="text-xs text-muted-foreground mt-4">
                        Supported formats: PDF, JPG, PNG, AI, ZIP (Max 50MB)
                      </p>
                    </div>
                  ) : (
                    <div className="border rounded-lg p-4 bg-primary/5 border-primary/20" data-testid="file-preview">
                      <div className="flex items-start gap-4">
                        <div className="p-3 rounded-lg bg-primary/10">
                          <FileText className="w-6 h-6 text-primary" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="font-medium truncate" data-testid="text-file-name">
                            {selectedFile.name}
                          </p>
                          <p className="text-sm text-muted-foreground" data-testid="text-file-size">
                            {(selectedFile.size / (1024 * 1024)).toFixed(2)} MB
                          </p>
                          <div className="flex items-center gap-2 mt-2 text-sm text-primary">
                            <CheckCircle2 className="w-4 h-4" />
                            <span>File ready for upload</span>
                          </div>
                        </div>
                        <Button
                          type="button"
                          variant="ghost"
                          size="icon"
                          onClick={handleRemoveFile}
                          data-testid="button-remove-file"
                        >
                          <X className="w-4 h-4" />
                        </Button>
                      </div>
                    </div>
                  )}
                </div>

                {/* Additional Notes */}
                <FormField
                  control={form.control}
                  name="notes"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Additional Notes (Optional)</FormLabel>
                      <FormControl>
                        <Textarea
                          placeholder="Specify quantity, paper type, size requirements, or any special instructions..."
                          className="min-h-24"
                          {...field}
                          data-testid="textarea-notes"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                {/* Info Message */}
                <div className="flex items-start gap-3 p-4 bg-accent/10 border border-accent/20 rounded-lg">
                  <AlertCircle className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                  <div className="text-sm text-foreground/90">
                    <p className="font-medium mb-1">Important Information</p>
                    <p>
                      For best results, provide print-ready files with proper bleed and resolution. 
                      We'll review your submission and contact you within 24 hours with a quote and timeline.
                    </p>
                  </div>
                </div>

                {/* Submit Button */}
                <Button
                  type="submit"
                  size="lg"
                  className="w-full"
                  disabled={uploadMutation.isPending || !selectedFile}
                  data-testid="button-submit-upload"
                >
                  {uploadMutation.isPending ? (
                    'Submitting...'
                  ) : (
                    <>
                      <Upload className="w-4 h-4 mr-2" />
                      Submit Design Files
                    </>
                  )}
                </Button>
              </form>
            </Form>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
