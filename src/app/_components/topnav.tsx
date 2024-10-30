"use client";

import { UploadButton } from "@/utils/uploadthing";
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";
import { useRouter } from "next/navigation";

export function TopNav() {
  const router = useRouter();

  return (
    <nav className="flex w-full items-center justify-between">
      <div>Gallery</div>
      <SignedOut>
        <SignInButton />
      </SignedOut>
      <SignedIn>
        <UploadButton
          endpoint="imageUploader"
          onClientUploadComplete={() => {
            router.refresh();
          }}
          onUploadError={(error: Error) => {
            // Do something with the error.
            alert(`ERROR! ${error.message}`);
          }}
        />
        <UserButton />
      </SignedIn>
    </nav>
  );
}
