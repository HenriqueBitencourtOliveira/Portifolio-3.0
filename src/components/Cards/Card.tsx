// components/Cards/Card.tsx
import React from 'react';
import { Card, CardImg, CardBody, CardTitle, CardText, Button } from 'reactstrap';
import styles from './Card.module.css';

interface ProjectCardProps {
  title: string;
  description: string;
  imageUrl: string;
  link: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ title, description, imageUrl, link }) => {
  return (
    <Card className={styles.card} >
      <CardImg top width="100%" height="190px" style={{objectFit:"fill", borderRadius:"20px 20px 0px 0px" }} src={imageUrl} alt={title} />
      <CardBody>
        <CardTitle tag="h5" className={styles.cardTitle}>{title}</CardTitle>
        <CardText>{description}</CardText>
        <Button  className={styles.cardText} href={link} target="_blank" rel="noopener noreferrer">View Project</Button>
      </CardBody>
    </Card>
  );
};

export default ProjectCard;
