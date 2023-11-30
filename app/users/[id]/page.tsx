const IdPage = ({
    params,
}: {
    params: { id: string}
}) =>{
    return (
        <div>

            User ID is {params.id}
        </div>
    )
}

export default IdPage;