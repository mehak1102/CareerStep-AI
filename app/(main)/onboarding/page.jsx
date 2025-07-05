import { getUserOnboardingStatus } from '@/actions/user'
import { industries } from '@/app/data/industries'
// import { redirect } from 'next/dist/server/api-utils'
import React from 'react'
import OnboardingForm from './_components/onboarding-form'
import { redirect } from 'next/navigation'

const OnboardingPage = async () => {

const {isOnboarded} = await getUserOnboardingStatus()

if (isOnboarded) {
    redirect("/dashboard")
}

  return <main>
    <OnboardingForm industries={industries}/>
  </main>
}

export default OnboardingPage