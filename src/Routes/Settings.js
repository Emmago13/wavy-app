import React from "react";
import {
    Settings2Outline,
    EmailOutline,
    PersonOutline
} from "@styled-icons/evaicons-outline";
import { Container, Icon, Label } from "../Components/Components";
import "../App.css";


const SettingsScreen = () =>{
    return(
        <div className="parent">
            <Container className="container" color="#5c80bc">
                <Icon><Settings2Outline size={32} /></Icon>
                <Label>Settings</Label>
            </Container>
            <Container className="container" color="#5c80bc">
                <Icon><EmailOutline size={32} /></Icon>
                <Label>Email</Label>
            </Container>
            <Container className="container" color="#5c80bc">
                <Icon><PersonOutline size={32} /></Icon>
                <Label>Profile</Label>
            </Container>
        </div>
    )
}



export default SettingsScreen;