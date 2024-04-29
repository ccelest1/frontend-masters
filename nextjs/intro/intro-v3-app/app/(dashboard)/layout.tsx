import NewToDoForm from "@/components/NewToDoForm"

// put todoform here in order to make sure that its on page and doesn't have to wait for todos to load

const DashboardLayout = ({ children }) => {
    return (
        <div>
            <h1> dashboard </h1>
            <div
            > <NewToDoForm /> </div>
            <div> {children} </div>
        </div>
    )
}

export default DashboardLayout
