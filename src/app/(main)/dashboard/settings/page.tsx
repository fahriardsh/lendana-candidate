import type { Metadata } from "next";
import { redirect } from "next/navigation";

import { env } from "@/env";
import { validateRequest } from "@/lib/auth/validate-request";

import TabSwitcher from "./_components/tab-switcher";
import PersonalData from "./_components/personal-data";

export const metadata: Metadata = {
  metadataBase: new URL(env.NEXT_PUBLIC_APP_URL),
  title: "Settings",
  description: "Manage your profile and account settings",
};

export default async function BillingPage() {
  const { user } = await validateRequest();

  if (!user) {
    redirect("/signin");
  }

  return (
    <div className="grid gap-8">
      <div>
        <h1 className="text-3xl font-bold md:text-4xl">Settings</h1>
        <p className="text-sm text-muted-foreground">Manage your profile settings</p>
      </div>
      
      <TabSwitcher Page1={<PersonalData />} Page2={<div>Study History</div>} Page1ButtonText="Bio data" Page2ButtonText="Record Study" />
    </div>
  );
}
