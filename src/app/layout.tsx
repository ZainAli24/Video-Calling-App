import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

import React from 'react'

export default function layout({children}:any) {
  return (
    <html>
      <body>
        {children}
      </body>
    </html>
  )
}
