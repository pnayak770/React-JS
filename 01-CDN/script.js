const Title=()=>{
    return (
        <div>

            <h1>Learn Web Development</h1>
            <hr></hr>
        </div>
    );
};

const Mypara =()=>{
    return (
        <div>

            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam illum sequi eius quasi, totam maiores dolor aspernatur fuga quod accusamus sapiente. Earum vel dolorum rem blanditiis consequatur molestias aperiam corporis, possimus minus natus dolorem fuga inventore est voluptas veniam perspiciatis quae aut dignissimos nesciunt, magni quod enim error consequuntur tempore!
            </p>
            <br></br>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam illum sequi eius quasi, totam maiores dolor aspernatur fuga quod accusamus sapiente. Earum vel dolorum rem blanditiis consequatur molestias aperiam corporis, possimus minus natus dolorem fuga inventore est voluptas veniam perspiciatis   <a href="https://developer.mozilla.org/en-US/docs/Learn">quae aut dignissimos</a>    nesciunt, magni quod enim error consequuntur tempore!
            </p>
            <br></br>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam illum sequi eius quasi, totam maiores dolor aspernatur fuga quod accusamus sapiente. Earum vel dolorum rem blanditiis consequatur molestias aperiam corporis, possimus minus natus dolorem fuga inventore est voluptas veniam perspiciatis quae aut dignissimos nesciunt, magni quod enim error consequuntur tempore!
            </p>
        </div>
    );
};



const MainContainer=()=>{
    return (
        <div>
            <Title/>
            <Mypara/>
        </div>
    );
};


ReactDOM.render(<MainContainer />,document.querySelector("#root"));