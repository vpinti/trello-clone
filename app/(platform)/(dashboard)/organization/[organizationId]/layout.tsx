import { OrgControl } from "./_components/org-control"

const OrganizationIdayout = ({
    children
}: {
    children: React.ReactNode
}) => {
  return (
    <>
        <OrgControl />
        {children}
    </>
  )
}

export default OrganizationIdayout