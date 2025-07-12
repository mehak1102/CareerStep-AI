import { getIndustryInsights } from "@/actions/dashboard"
// import DashboardView from "./_component/dashboard-view";
import { getUserOnboardingStatus } from "@/actions/user"
import { redirect } from "next/navigation"
import DashboardView from "./_components/dashboard-view"

const IndustryInsightsPage = async () => {
const {isOnboarded} = await getUserOnboardingStatus()



if (!isOnboarded) {
    redirect("/onboarding")
}
const insights = await getIndustryInsights();


 return (
    <div className="container mx-auto">
      <DashboardView insights={insights} />
    </div>
  );
}

export default IndustryInsightsPage



// import { getIndustryInsights } from "@/actions/dashboard";
// import { getUserOnboardingStatus } from "@/actions/user";
// import { redirect } from "next/navigation";
// import DashboardView from "./_components/dashboard-view";

// const IndustryInsightsPage = async () => {
//   // ✅ First, check if user has completed onboarding
//   const { isOnboarded } = await getUserOnboardingStatus();

//   // ✅ Redirect early if not onboarded
//   if (!isOnboarded) {
//     redirect("/onboarding");
//   }

//   // ✅ Now it's safe to fetch insights
//   const insights = await getIndustryInsights();

//   return (
//     <div className="container mx-auto">
//       <DashboardView insights={insights} />
//     </div>
//   );
// };

// export default IndustryInsightsPage;
