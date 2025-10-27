import React from 'react';
import ProfileCard from "./ProfileCard";
function ProfileContainr(){
    const profiles =[
        {name:'Alice', age: 25, bio:'A great swimmer'},
        {name:'Tom', age: 29, bio:'Addicted to book reading'},
        {name:'Henry', age: 32, bio:'Enjoys gaming'}
    ];
    return(
        <div>
            <h2>Profile List</h2>
            <div>
                {profiles.map((profile,index)=>(
                    <ProfileCard
                      key={index}
                      name={profile.name}
                      age={profile.age}
                      bio={profile.bio}
                      />
                ))}
            </div>
        </div>
    );
}

export default ProfileContainr;
