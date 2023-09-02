import { Fragment } from 'react'
import TopBar from "@/components/topBar";
import DashboardBody from "@/components/dashboardBody";
export default function Dashboard() {
  return (
    <>
      <div className="min-h-full">
        <TopBar />
        <DashboardBody />
      </div>
    </>
  )
}
