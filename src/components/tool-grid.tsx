import  ToolCard  from './tool-card'
import { FileText, FileUp } from 'lucide-react'
import Link from 'next/link';



export default function ToolGrid() {
  return (


    <div className="grid md:grid-cols-3 gap-6 ">






<Link href="./tools/eulogygenerator">
      <ToolCard
        title="Eulogy Generator"
        description="Eulogy writing system"
        content="Our image resizer tool helps you quickly adjust the dimensions of your images without compromising on quality. Perfect for social media posts, web graphics, or email attachments, this tool ensures your images look great at any size."
        buttonText="Write an Eulogy"
        icon={FileUp}
      />
 </Link>






 <Link href="./mrrjunkies"> 
 <ToolCard
        title="MRR Junkies"
        description="Get inspired by real-world examples "
        content="Discover the Monthly Recurring Revenue of famous entrepreneurs! Get inspired by real-world examples and learn what drives their success."
        buttonText="Check out MRRs"
        icon={FileUp}
      />
 </Link>


 <Link href="https://www.aiimageandvideogenerators.xyz"> 
<ToolCard
        title="AI Image and Video Generators "
        description="Discover Top AI Visual Tools."
        content="Discover Top AI Visual Tools."
        buttonText="Go to Directory"
        icon={FileUp}
      />
 </Link>

 

 <Link href="https://www.amazon.com/dp/B0D15C98H4"> 
<ToolCard
        title="Beat Inflation with an Urban Garden, A book"
        description="This book will guide you through the processes of setting up and maintaining an urban garden in order to produce your own cheaper food."
        content="Discover Top AI Visual Tools."
        buttonText="Buy in Amazon"
        icon={FileUp}
      />
 </Link>



 




 <Link href="./tools/pdf">

<ToolCard
  title="PDF Converter"
  description="Convert yoour documents to PDF format with ease"
  content="Our PDF converter tool allows you to quickly and easily convert various file formats to PDF. Whether you have Word documents, Excel spreadsheets, or PowerPoint presentations, our tool ensures high-quality conversions while maintaining the original formatting."
  buttonText="Convert to PDF"
  icon={FileText}
/>
</Link>










    </div>
  )
}