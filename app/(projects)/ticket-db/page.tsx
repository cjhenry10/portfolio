import ProjectPage from '@/components/Projects/ProjectPage';
import styles from './page.module.css';

const TicketDB = () => {
  return (
    <>
      <ProjectPage title='Ticketing System Database Design' description="This is a master's level project detailing the design and development of both a relational and non-relational database. Included in this report are the diagrams and code for building the database in SQL Server, populating it, and executing some queries along with a stored procedure and a trigger. Next, I document the creation of a non-relational database for the same data in Couchbase." link='https://drive.google.com/file/d/1BmYcsSLZNpD3zdkCIFfEdfY5EYvD1dYn/preview' />
    </>
  );
};

export default TicketDB;
