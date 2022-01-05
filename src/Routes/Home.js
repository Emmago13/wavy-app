import React from "react";
import {
    HomeOutline,
    SearchOutline,
    BellOutline
} from "@styled-icons/evaicons-outline";
import { Container, Icon, Label } from "../Components/Components";
import "../App.css";


const HomeScreen = () =>{
    return(
        <div className="parent">
            <Container className="container" color="#f14964">
                <Icon><HomeOutline size={32} /></Icon>
                <Label>Home</Label>
            </Container>
            <Container className="container" color="#f14964">
                <Icon><SearchOutline size={32} /></Icon>
                <Label>Search</Label>
            </Container>
            <Container className="container" color="#f14964">
                <Icon><BellOutline size={32} /></Icon>
                <Label>Notifications</Label>
            </Container>
        </div>
    )
}


export default HomeScreen;