import React from "react";
import {
    PricetagsOutline,
    PeopleOutline,
    MessageSquareOutline,
} from "@styled-icons/evaicons-outline";
import { Container, Icon, Label } from "../Components/Components";
import "../App.css";

const AboutScreen = () =>{
    return(
        <div className="parent">
            <Container className="container" color="#1ac0a2">
                <Icon><PeopleOutline size={32} /></Icon>
                <Label>Clients</Label>
            </Container>
            <Container className="container" color="#1ac0a2">
                <Icon><MessageSquareOutline size={32} /></Icon>
                <Label>Comments</Label>
            </Container>
            <Container className="container" color="#1ac0a2">
                <Icon><PricetagsOutline size={32} /></Icon>
                <Label>Tags</Label>
            </Container>
        </div>
    )
}


export default AboutScreen;