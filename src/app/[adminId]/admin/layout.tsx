import Image from "next/image"

export default function AdminLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="sm:m-5 ">
     <Image
        src="/et-logo.png"
        alt="et-logo"
        width={400}
        height={400}
        className="h-12 w-auto mt-4 ml-4"
      />
    {children}
    </div>
   
     
  );
}
