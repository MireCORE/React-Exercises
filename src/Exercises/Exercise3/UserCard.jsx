const UserCard = ({name, email})=>{
    return(
        <>
            <h1>Your name is: {name}</h1>
            <span>Your email: {email}</span>
        </>
    )
};
export default UserCard;