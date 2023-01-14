import React from "react";

function Loading() {
	return 	<></>
    
    {loadingImg ? (
        <h1>Loading</h1>
    ) : (
        <div className={styles.um}>
            <div>
                {data && (
                    <img src={data.image_url} alt="image_phrase" />
                )}
                {data ? <h1>{data.phrase}</h1> : "Loading..."}
            </div>
        </div>
    )}
}

export { Loading };
