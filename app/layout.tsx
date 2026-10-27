import "./styles.css";
import type {ReactNode} from "react";
export const metadata={title:"LessonScript",description:"A tiny worksheet language with exact fractional arithmetic and source-line diagnostics."};
export default function Layout({children}:{children:ReactNode}){return <html lang="en"><body className="lab">{children}</body></html>;}
