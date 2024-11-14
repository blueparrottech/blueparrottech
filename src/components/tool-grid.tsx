import  ToolCard  from './tool-card'
import { FileText, FileUp } from 'lucide-react'
import Link from 'next/link';



export default function ToolGrid() {
  return (


    <div className="grid md:grid-cols-3 gap-6">

<Link href="./tools/pdf">

      <ToolCard
        title="PDF Converter"
        description="Convert yoour documents to PDF format with ease"
        content="Our PDF converter tool allows you to quickly and easily convert various file formats to PDF. Whether you have Word documents, Excel spreadsheets, or PowerPoint presentations, our tool ensures high-quality conversions while maintaining the original formatting."
        buttonText="Convert to PDF"
        icon={FileText}
      />
 </Link>


 <Link href="./tools/eulogygenerator">
      <ToolCard
        title="Eulogy Generator"
        description="Eulogy writing system"
        content="Our image resizer tool helps you quickly adjust the dimensions of your images without compromising on quality. Perfect for social media posts, web graphics, or email attachments, this tool ensures your images look great at any size."
        buttonText="Write an Eulogy"
        icon={FileUp}
      />
 </Link>


<ToolCard
        title="Image Resizer"
        description="Resize your images without losing quality"
        content="Our image resizer tool helps you quickly adjust the dimensions of your images without compromising on quality. Perfect for social media posts, web graphics, or email attachments, this tool ensures your images look great at any size."
        buttonText="Resize Image"
        icon={FileUp}
      />


<ToolCard
        title="Image Resizer"
        description="Resize your images without losing quality"
        content="Our image resizer tool helps you quickly adjust the dimensions of your images without compromising on quality. Perfect for social media posts, web graphics, or email attachments, this tool ensures your images look great at any size."
        buttonText="Resize Image"
        icon={FileUp}
      />


<ToolCard
        title="Image Resizer"
        description="Resize your images without losing quality"
        content="Our image resizer tool helps you quickly adjust the dimensions of your images without compromising on quality. Perfect for social media posts, web graphics, or email attachments, this tool ensures your images look great at any size."
        buttonText="Resize Image"
        icon={FileUp}
      />


<ToolCard
        title="Image Resizer"
        description="Resize your images without losing quality"
        content="Our image resizer tool helps you quickly adjust the dimensions of your images without compromising on quality. Perfect for social media posts, web graphics, or email attachments, this tool ensures your images look great at any size."
        buttonText="Resize Image"
        icon={FileUp}
      />


<ToolCard
        title="Image Resizer"
        description="Resize your images without losing quality"
        content="Our image resizer tool helps you quickly adjust the dimensions of your images without compromising on quality. Perfect for social media posts, web graphics, or email attachments, this tool ensures your images look great at any size."
        buttonText="Resize Image"
        icon={FileUp}
      />


<ToolCard
        title="Image Resizer"
        description="Resize your images without losing quality"
        content="Our image resizer tool helps you quickly adjust the dimensions of your images without compromising on quality. Perfect for social media posts, web graphics, or email attachments, this tool ensures your images look great at any size."
        buttonText="Resize Image"
        icon={FileUp}
      />




















    </div>
  )
}