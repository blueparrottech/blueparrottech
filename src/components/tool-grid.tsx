import  ToolCard  from './tool-card'
import { FileText, FileUp } from 'lucide-react'
import Link from 'next/link';



export default function ToolGrid() {
  return (


    <div className="grid md:grid-cols-3 gap-24 ">



<title>LimeParrot Tech.Site - Tools and Content</title>
<meta
  name="description"
  content="Interesting tools and content for entrepeneurs and businesses."
/>



<Link  href="https://www.genfoo.com">
      <ToolCard
      bgColor='bg-lime-300'
        title="GenFoo"
        description="Discover a minimalist AI chat with skins."
        content="Discover a minimalist AI chat with skins."
        buttonText="AI chat"
        icon={FileUp}
      />
 </Link>



<Link  href="./tools/eulogygenerator">
      <ToolCard
      bgColor='bg-lime-300'
        title="Eulogy Generator"
        description="Discover how our Eulogy Generator can assist you in crafting thoughtful and personalized eulogies."
        content="Eulogy writing system."
        buttonText="Write an Eulogy"
        icon={FileUp}
      />
 </Link>






 <Link href="./mrrjunkies"> 
 <ToolCard
 bgColor='bg-red-300'
        title="MRR Junkies"
        description="Discover the Monthly Recurring Revenue of famous entrepreneurs. "
        content="Discover the Monthly Recurring Revenue of famous entrepreneurs! Get inspired by real-world examples and learn what drives their success."
        buttonText="Check out MRRs"
        icon={FileUp}
      />
 </Link>


 <Link href="https://www.aiimageandvideogenerators.xyz"> 
<ToolCard
bgColor='bg-blue-300'
        title="AI Image and Video Generators "
        description="Discover Top AI Visual Tools."
        content="Discover Top AI Visual Tools."
        buttonText="Go to Directory"
        icon={FileUp}
      />
 </Link>

 

 <Link href="https://www.amazon.com/dp/B0D15C98H4"> 
<ToolCard
bgColor='bg-red-300'
        title="Beat Inflation with an Urban Garden, A book"
        description="This book will guide you through the processes of setting up and maintaining an urban garden in order to produce your own cheaper food."
        content="Discover Top AI Visual Tools."
        buttonText="Buy in Amazon"
        icon={FileUp}
      />
 </Link>



 




 <Link href="./hireshopifiedtalent">

<ToolCard
bgColor='bg-violet-300'
  title="Hire Shopified Talent"
  description="Connect with skilled Shopify developers, designers, and marketers to grow your e-commerce business."
  content="Connect with skilled Shopify developers, designers, and marketers to grow your e-commerce business."
  buttonText="Find Talent"
  icon={FileText}
/>
</Link>




<Link href="./californiaplumbersdirectory">

<ToolCard
bgColor='bg-slate-300'
  title="California Plumbers Directory"
  description="Our directory connects you with experienced plumbers who deliver top-notch service when you need it most."
  content="Our directory connects you with experienced plumbers who deliver top-notch service when you need it most.."
  buttonText="Find Plumbers in CA"
  icon={FileText}
/>
</Link>



 <Link href="https://www.detallesjugueteria.com.ar"> 
<ToolCard
bgColor='bg-red-300'
        title="Detalles Almacén de Juguetes San Luis Argentina"
        description="Detalles Almacén de Juguetes."
        content="Detalles Almacén de Juguetes."
        buttonText="Detalles Almacén de Juguetes"
        icon={FileUp}
      />
 </Link>

    </div>
  )
}