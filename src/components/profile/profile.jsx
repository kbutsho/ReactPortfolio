import React, { Component } from 'react';
import './profile.css'
class Profile extends Component {

    render() {
        const usersObj = [
            {
                name: "Koushik Biswas", title: "Fullstack JavaScript (MERN)Application Developer", skills: ["JavaScript DOM", "React.js", "Node.js", "MongoDB"], socialLinks: [<a href="https://www.facebook.com/kbutsho" target="blank">Facebook</a>, <a href="https://github.com/ProgrammingHero1" target="blank">Github</a>,
                <a href="https://www.linkedin.com" target="blank">Linkedin</a>, <a href="https://www.twitter.com" target="blank">Twitter</a>]
            },
            {
                name: "KB UTSHO", title: "Fullstack Python web Application Developer", skills: ["JavaScript DOM", "React.js", "Django", "Mysql"], socialLinks: [<a href="https://www.facebook.com/kbutsho" target="blank">Facebook</a>, <a href="https://github.com/ProgrammingHero1" target="blank">Github</a>,
                <a href="https://www.linkedin.com" target="blank">Linkedin</a>, <a href="https://www.twitter.com" target="blank">Twitter</a>]
            },
            {
                name: "Zannat Rakhi", title: "Data Scientist", skills: ["Python", "C++", "C#", "Java"], socialLinks: [<a href="https://www.facebook.com/kbutsho" target="blank">Facebook</a>, <a href="https://github.com/ProgrammingHero1" target="blank">Github</a>,
                <a href="https://www.linkedin.com" target="blank">Linkedin</a>, <a href="https://www.twitter.com" target="blank">Twitter</a>]
            }
        ];
        return (
            <div className="Container">
                
                {
                    usersObj.map(obj => <Users setUsers={obj}></Users>)
                }
            </div>
        );
    }
}
function Users(props) {
    return (
        <div className="SingleComponent">
            <div className="Bio">
                <h3>{props.setUsers.name}</h3>
                <p>{props.setUsers.title}</p>
            </div>
            <div className="Skills">
                <h3>Comfortable With</h3>
                <ul>
                    <li>{props.setUsers.skills[0]}</li>
                    <li>{props.setUsers.skills[1]}</li>
                    <li>{props.setUsers.skills[2]}</li>
                    <li>{props.setUsers.skills[3]}</li>
                </ul>
            </div>
            <div className="Links">
                <h3>Social Links</h3>
                <ul>
                    <li>{props.setUsers.socialLinks[0]}</li>
                    <li>{props.setUsers.socialLinks[1]}</li>
                    <li>{props.setUsers.socialLinks[2]}</li>
                    <li>{props.setUsers.socialLinks[3]}</li>
                </ul>
            </div>
        </div>
    )
}
export default Profile;