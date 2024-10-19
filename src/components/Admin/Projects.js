import React, { Fragment, useEffect, useState } from 'react';
import axios from 'axios';
import CreateProject from '../Projects/CreateProject';
import AllProjects from '../Projects/AllProjects';


const Projects = () => {
    const [projects, setProjects] = useState([])
    const [projectDetails, setProjectDetails] = useState({
        company: '',
        description: '',
        duration: '',
        githubLink: '',
        imageUrl: '',
        liveLink: '',
        outcomes: '',
        role: '',
        showLinks: false,
        status: '',
        title: '',
        technologies: [''],
    });
    const [isProjectModal, setIsProjectModal] = useState(false);


    useEffect(() => {
        const fetchProjects = async () => {
            try {
                const token = JSON.parse(localStorage.getItem("token"));
                const response = await axios.get(`${process.env.REACT_APP_SERVER_IP}/project/getall`, {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                });
                if (response.data && response.data?.projects.length) {
                    setProjects(response?.data?.projects);
                }

            } catch (error) {
                console.log(error);
            }
        }
        fetchProjects()
    }, [])


    console.log(projects)


    return (
        <Fragment>
            {!isProjectModal ?
                <AllProjects projects={projects} setIsProjectModal={setIsProjectModal} />
                :
                <CreateProject
                    projectDetails={projectDetails}
                    setProjectDetails={setProjectDetails}
                    setIsProjectModal={setIsProjectModal}
                />
            }


        </Fragment>
    )
}

export default Projects
