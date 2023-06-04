import './shimmer.css'
const Shimmer = () => {
    return (
        <div className='cards'>
        <div className='cards_shimmer'>
            <div className="shimmer"></div>
            {/* <div className='shimmer_header'></div>b */}
            {/* <div> */}
                <div className='shimmer_box'>

                    {
                        Array(6)
                            .fill("")
                            .map((e, index) => (
                                <div className="shimmer_container" key={index}>
                                    <section></section>
                                    <section></section>
                                </div>
                            ))}
                </div>
            {/* </div> */}
        </div>
        </div>
    )
};

export default Shimmer;