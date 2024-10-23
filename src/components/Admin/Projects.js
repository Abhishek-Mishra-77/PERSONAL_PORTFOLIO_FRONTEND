import React, { Fragment, useEffect, useState } from 'react';
import axios from 'axios';
import CreateProject from '../Projects/CreateProject';
import AllProjects from '../Projects/AllProjects';
import { toast } from 'react-toastify';
import ConfirmationModal from '../Modals/ConfirmationModal';


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
    const [removeId, setRemoveId] = useState("");
    const [isOpenModal, setIsModalOpen] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const contactsPerPage = 4;

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
    }, [setIsProjectModal, isProjectModal])


    const onCreateAndUpdateProjectHandler = async (e) => {
        e.preventDefault();
        if (
            !projectDetails.title ||
            !projectDetails.description ||
            !projectDetails.company ||
            !projectDetails.duration ||
            !projectDetails.role ||
            !projectDetails.status ||
            !projectDetails.technologies.length
        ) {
            toast.error("Please fill in all required fields");
            return;
        }

        if (projectDetails.showLinks) {
            if (!projectDetails.githubLink && !projectDetails.liveLink) {
                toast.error("Please provide both GitHub and Live links when 'Show Links' is enabled");
                return;
            }
        }

        try {
            const token = JSON.parse(localStorage.getItem("token"));
            const URL = projectDetails?._id ? `${process.env.REACT_APP_SERVER_IP}/project/update/${projectDetails?._id}` : `${process.env.REACT_APP_SERVER_IP}/project/create`;
            await axios.post(`${URL}`, projectDetails, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });
            toast.success("Project created successfully");
            setProjectDetails({
                company: "",
                description: "",
                duration: "",
                githubLink: "",
                imageUrl: "",
                liveLink: "",
                outcomes: "",
                role: "",
                showLinks: false,
                status: "",
                title: "",
                technologies: [""],
            });
            setIsProjectModal(false);
        } catch (error) {
            toast.error(error?.response?.data?.message || "An error occurred while creating the project");
            console.log(error);
        }
    }

    const onRemoveProjectHandler = async () => {
        try {
            const token = JSON.parse(localStorage.getItem("token"));
            await axios.delete(`${process.env.REACT_APP_SERVER_IP}/project/remove/${removeId}`, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });
            const filteredProjects = projects.filter((project) => project._id !== removeId);
            setProjects(filteredProjects);
            toast.success("Project deleted successfully");
        } catch (error) {
            toast.error(error?.response?.data?.message || "An error occurred while creating the project");
            console.log(error);
        }
        finally {
            setIsModalOpen(false);
            setRemoveId("");
        }

    }


    const totalPages = Math.ceil(projects?.length / contactsPerPage);
    const indexOfLastContact = currentPage * contactsPerPage;
    const indexOfFirstContact = indexOfLastContact - contactsPerPage;
    const currentProjects = projects?.slice(indexOfFirstContact, indexOfLastContact);

    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
    };


    return (
        <Fragment>
            {!isProjectModal ?
                <AllProjects
                    setProjectDetails={setProjectDetails}
                    setRemoveId={setRemoveId}
                    projects={currentProjects}
                    setIsModalOpen={setIsModalOpen}
                    setIsProjectModal={setIsProjectModal}
                    handlePageChange={handlePageChange}
                    currentPage={currentPage}
                    totalPages={totalPages}
                />
                :
                <CreateProject
                    onCreateAndUpdateProjectHandler={onCreateAndUpdateProjectHandler}
                    projectDetails={projectDetails}
                    setProjectDetails={setProjectDetails}
                    setIsProjectModal={setIsProjectModal}
                />
            }

            {isOpenModal && (
                <ConfirmationModal
                    heading="Delete Project"
                    message="Are you sure you want to delete this project?"
                    setOnConfirm={setIsModalOpen}
                    onFunctionHandler={onRemoveProjectHandler}
                    setRemoveId={setRemoveId}
                />
            )}
        </Fragment>
    )
}

export default Projects
