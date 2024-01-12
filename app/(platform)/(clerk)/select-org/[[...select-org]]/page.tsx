import { OrganizationList } from "@clerk/nextjs";

export default function SelectOrganizationPage() {
  return (
    <div>
      <OrganizationList 
      hidePersonal //hide personal organization
      afterSelectOrganizationUrl="/organization/:id" //redirect to this page after selecting an organization
      afterCreateOrganizationUrl="/organization/:id"
      />
    </div>
  );
}
