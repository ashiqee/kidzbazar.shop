import "@/styles/globals.css";

import { Navbar } from "@/components/navbar";
import { Link } from "@nextui-org/link";



export default function FrontendLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
 <>
 <Navbar/>
 {children}
 <footer className="w-full flex items-center justify-center py-3">
              <Link
                isExternal
                className="flex items-center gap-1 text-current"
                href="https://nextui-docs-v2.vercel.app?utm_source=next-app-template"
                title="nextui.org homepage"
              >
                <span className="text-default-600">Powered by</span>
                <p className="text-primary">NextUI</p>
              </Link>
            </footer>
 </>
  );
}