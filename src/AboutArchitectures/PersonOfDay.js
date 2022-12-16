import Stack from 'react-bootstrap/Stack';
import './PersonOfDay.css'
import '../i18n.js';
import Card from 'react-bootstrap/Card';
import { useTranslation } from 'react-i18next';
import data from "../DataAboutPersonOfDay.json";
import {Image} from "react-bootstrap";
import { Link} from "react-router-dom"
import Button from 'react-bootstrap/Button';

function PersonOfDay() {
    const { t, i18n } = useTranslation();
    const keys = Object.keys(data);
    let id = keys[Math.floor(Math.random() * 4)];
    return (
        <Stack className="person_of_day">
            <Card className="person-card">
                <Card.Body className="person-info">
                    <Card.Title className = "person_of_day_head">{t("person_of_day")}
                    </Card.Title>
                    <Card.Text className="person-name">{t(`architects.${id}.surname`)} {t(`architects.${id}.name`)} {t(`architects.${id}.patronymic`)}
                    </Card.Text>
                    <Card.Text className="person-years">
                        {data[id]["bYear"]} - {data[id]["dYear"]}
                    </Card.Text>
                    <Card className="person-img">
                        <Image src={require(`../arch_img/${id}/ava.png`)} className="person-photo"/>
                    </Card>
                    <Card.Text className="person-mainInfo">
                        {t(`architects.${id}.shortDesc`)}
                    </Card.Text>
                    <Card className="person-btn">
                    <Button className="moreInfoBtn" as={Link} to={`/architects/${id}`}>{t("personButton")}</Button>
                    </Card>
                </Card.Body>
            </Card>
        </Stack>
    );
}

export default PersonOfDay;