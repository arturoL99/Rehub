import React, { useState, useEffect } from "react";
import contentfulClient from "../client/client";
import Loading from "../components/loading/loading";
import PrivacyPolicy from "../components/policies/privacy";

function Privacy() {
    const [privacy, setPrivacy] = useState();
    useEffect(() => {
        contentfulClient.getEntry('5hrlotzNnE7oRUYjqak4FV')
            .then((entry) => setPrivacy(entry.fields.policy))
            .catch(console.error)
    }, []);
    console.log(privacy);
    if(privacy){
    return (
        <>
            <PrivacyPolicy policy={privacy} />
        </>
    )
    }else{
        return(
            <><Loading /></>
        )
    }
}

export default Privacy;