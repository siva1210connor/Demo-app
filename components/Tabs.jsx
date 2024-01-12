import { useState } from "react";
import "./Tabs.css";
import DataTable from "react-data-table-component";
const Tabs = () => {
  const [activeTab, setActiveTab] = useState(1);

  const columns = [
    {
      name: "Advocate name",
      selector: (row) => row.name,
    },
    {
      name: "Enrollment",
      selector: (row) => row.enroll_id,
    },
    {
      name: "Plan Choosed",
      selector: (row) => row.plan,
    },
    {
      name: "Amount",
      selector: (row) => row.amt,
    },
    {
      name: "Paid on",
      selector: (row) => row.paid_on,
    },
    {
      name: "Membership Status",
      selector: (row) => row.membership_status,
    },
  ];

  const data = [
    {
      name: "Manoj",
      enroll_id: "LP/1245/22",
      plan: "12 month",
      amt: "2000",
      paid_on: "2023-12-06",
      membership_status: "Approved",
    },
  ];

  const tabs = [
    { id: 1, title: "Active Members", content: "Content for Active Members" },
    { id: 2, title: "Pending Requests", content: "Content for Pending Requests" },
    { id: 3, title: "Membership Expired", content: "Content for Membership Expired" },
  ];

  return (
    <div>
      <div className="tabs">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            className={`${
              activeTab === tab.id ? "active-tab" : "bg-gray-300 text-gray-700"
            } px-4 py-2 mx-1 rounded`}
            onClick={() => setActiveTab(tab.id)}
          >
            {tab.title}
          </button>
        ))}
      </div>
      <div className="mt-8 contents">
        {tabs.map(
          (tab) =>
            activeTab === tab.id && (
              <div key={tab.id}>
                <p className="text-lg font-bold">{tab.label}</p>
                <p>{tab.content}</p>
              </div>
            )
        )}
      </div>
      <div>
        <DataTable columns={columns} data={data} fixedHeader pagination/>
      </div>
    </div>
  );
};

export default Tabs;
