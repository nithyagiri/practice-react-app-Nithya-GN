import React from 'react';

function ProfileCard({name, age, bio}){
    return 
     <div>
        <h3>name: {name}</h3>;
        <p>age: {age}</p>;
        <p>bio: {bio}</p>;
     </div>
}
export default ProfileCard;