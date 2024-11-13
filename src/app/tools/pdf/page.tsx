
"use client"

import { useState } from 'react';
import { FileText, FileUp, Upload, ArrowRight } from 'lucide-react';
import { UserButton ,useAuth, SignedIn, SignedOut, RedirectToSignIn } from "@clerk/nextjs";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Alert, AlertDescription } from "@/components/ui/alert";

const PDFConverter = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [isConverting, setIsConverting] = useState(false);
  const [error, setError] = useState("");
  const { isLoaded, userId } = useAuth();

  const handleFileSelect = (event) => {
    const file = event.target.files[0];
    if (file && file.type === 'application/pdf') {
      setSelectedFile(file);
      setError("");
    } else {
      setError("Please select a valid PDF file");
      setSelectedFile(null);
    }
  };

 


  const handleConversion = async () => {
    if (!selectedFile) return;
    
    setIsConverting(true);
    try {
      // Here you would implement your PDF conversion logic
      // For example:
      // const formData = new FormData();
      // formData.append('file', selectedFile);
      // const response = await fetch('/api/convert-pdf', {
      //   method: 'POST',
      //   body: formData
      // });
      
      await new Promise(resolve => setTimeout(resolve, 2000)); // Simulated delay
      setIsConverting(false);
    } catch (err) {
      setError("Error converting file. Please try again.");
      setIsConverting(false);
    }
  };

  if (!isLoaded) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container mx-auto py-8">

<header className="flex justify-between items-center p-4">
        <h1>PDF Converter</h1>
 
      </header>


      <SignedIn>
        <div className="grid md:grid-cols-3 gap-6">
          {/* Upload Card */}
          <Card className="col-span-1">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <FileUp className="h-5 w-5" />
                Upload PDF
              </CardTitle>
              <CardDescription>
                Select the PDF file you want to convert
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-col items-center gap-4">
                <div className="w-full">
                  <label className="cursor-pointer">
                    <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center hover:border-gray-400 transition-colors">
                      <Upload className="h-8 w-8 mx-auto mb-2 text-gray-400" />
                      <p className="text-sm text-gray-500">
                        Click to select or drop your file here
                      </p>
                    </div>
                    <input
                      type="file"
                      className="hidden"
                      accept=".pdf"
                      onChange={handleFileSelect}
                    />
                  </label>
                </div>
                
                {selectedFile && (
                  <div className="w-full">
                    <Alert>
                      <FileText className="h-4 w-4" />
                      <AlertDescription>
                        Selected: {selectedFile.name}
                      </AlertDescription>
                    </Alert>
                  </div>
                )}

                {error && (
                  <Alert variant="destructive">
                    <AlertDescription>{error}</AlertDescription>
                  </Alert>
                )}
              </div>
            </CardContent>
          </Card>

          {/* Options Card */}
          <Card className="col-span-1">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <FileText className="h-5 w-5" />
                Convert Options
              </CardTitle>
              <CardDescription>
                Choose your conversion settings
              </CardDescription>
            </CardHeader>
            <CardContent>
              {/* Add your conversion options here */}
              <div className="space-y-4">
                {/* Example options - customize as needed */}
                <div className="flex items-center justify-between">
                  <span>Output Format</span>
                  <span>Word Document</span>
                </div>
                <div className="flex items-center justify-between">
                  <span>Quality</span>
                  <span>High</span>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Convert Card */}
          <Card className="col-span-1">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <ArrowRight className="h-5 w-5" />
                Convert
              </CardTitle>
              <CardDescription>
                Start the conversion process
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Button 
                className="w-full"
                disabled={!selectedFile || isConverting}
                onClick={handleConversion}
              >
                {isConverting ? "Converting..." : "Convert Now"}
              </Button>
            </CardContent>
          </Card>
        </div>
      </SignedIn>
      
      <SignedOut>
      <div>You are signed Out</div>
 {/* <RedirectToSignIn /> */}
      

      </SignedOut>
    </div>
  );
};

export default PDFConverter;