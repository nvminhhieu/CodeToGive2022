import Layout from "../../components/Layout"
import useAuthenticate from "../../hooks/useAuthenticate"
import PageTitle from "../../components/common/PageTitle"
import Link from "next/link"

const AdminPage = (
  <Layout>
    <PageTitle title="Admin" description="This is admin Interface" />
    <Link href="admin/assessment">
      <a>Assessment</a>
    </Link>
  </Layout>
)

const Admin = () => {
  const authenticateRender = useAuthenticate(null, AdminPage)

  return authenticateRender
}

export default Admin
