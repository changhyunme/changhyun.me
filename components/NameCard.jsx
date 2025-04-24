const nameCard = () => {
    return (
        <div className="">
            <div className="max-w-24 mx-auto my-3 rounded-full overflow-hidden">
                <img className="object-cover grayscale-100" 
                     src="profile.jpeg" 
                     alt="profile iamge"/>
            </div>
            <div className="mt-3 text-center">
                <h2 className="text-white">Changhyun Cho</h2>
                <h2 className="text-white/40">developer</h2>
            </div>
        </div>
    )
}

export default nameCard;