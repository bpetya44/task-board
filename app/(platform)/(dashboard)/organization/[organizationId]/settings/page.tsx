import {OrganizationProfile} from "@clerk/nextjs";

const SettingsPage = () => {
  return (
    <div className="w-full">
      <OrganizationProfile 
        appearance={{
            elements: {
                rootBox: {
                    boxShadow: "0 0 0 1px #E5E7EB",
                    borderRadius: "0.5rem",
                    width:`calc(100% - 2rem)`,
                },
                card: {
                    borderRadius: "0.5rem",
                    border: "1px solid #E5E7EB",
                    boxShadow: "none",
                    width: "100%",
                }
            },
        }}
        
        />
    </div>
  );
}

export default SettingsPage;
