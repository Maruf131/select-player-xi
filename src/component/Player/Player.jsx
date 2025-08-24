
const Player = ({player,playerRate}) => {
    const {img, author, author_img, country, position, rating, batter, price} = player;
    return (
        <div className="border-2 border-gray-300 rounded-xl p-4">
            <div>
                <img className="w-full object-fit" src={img} alt="" />
                <div className="flex item-center gap-4 mt-5">
                    <img className="size-8" src={author_img} alt="" />
                    <h3 className="text-xl font-bold">{author}</h3>
                </div>
                <div className="flex justify-between items-center border-b-2">
                    <h4>{country}</h4>
                    <button className="btn mb-2">{position}</button>
                </div>
                <div className="flex justify-between items-center mt-2">
                    <h4 className="font-bold">Rating</h4>
                    <h4>{rating}</h4>
                </div>
                <div className="flex justify-between items-center mt-2">
                    <h4 className="font-bold">Batter</h4>
                    <h4>{batter}</h4>
                </div>
                <div className="flex justify-between items-center mt-2">
                    <h4 className="font-bold">Price: {price}</h4>
                    <button onClick={()=>playerRate(price, player)} className="btn">Choose Player</button>
                </div>
            </div>
        </div>
    );
};

export default Player;