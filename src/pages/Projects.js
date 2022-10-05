import React, { useState, useEffect, useContext } from "react";
import {
  doc,
  onSnapshot,
  updateDoc,
  setDoc,
  deleteDoc,
  collection,
  serverTimestamp,
  getDoc,
  query,
  where,
  orderBy,
  limit,
} from "firebase/firestore";
import { db } from "../firebase";
import { AuthContext } from "../auth/Auth";
import { v4 as uuidv4 } from "uuid";

import { Text, View } from "react-native";
import { TableVirtuoso } from "react-virtuoso";

import CreateProject from "../components/CreateProject";
import "../Projects.css";

function Projects() {
  const projectsCollectionRef = collection(db, "projects");

  const currentUser = useContext(AuthContext);
  //const currentUserId = currentUser ? currentUser.uid : null;

  //const [idCounter, setIdCounter] = useState(0)
  const [projectTitle, setTitle] = useState("");
  const [projectDesc, setDesc] = useState("");

  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(false);

  const ItemDivider = () => {
    return (
      <View
        style={{
          height: 2,
          width: "100%",
          backgroundColor: "#607D8B",
        }}
      />
    );
  };
  //GET FUNCTION *******
  useEffect(() => {
    const q = query(
      projectsCollectionRef,
      where("name", "==", "Zack Walsh") //TESTING PURPOSES, THIS SHOULD CHANGE TO CURRNETUSER
    );

    setLoading(true);
    const unsub = onSnapshot(projectsCollectionRef, (QuerySnapshot) => {
      const items = [];
      QuerySnapshot.forEach((doc) => {
        items.push(doc.data());
      });
      setProjects(items);
      setLoading(false);
    });
    return () => {
      unsub();
    };
  }, []);

  //START CRUD FUNCTIONS HERE ********************
  async function addProject() {
    const creator = currentUser ? currentUser.uid : "unknown";
    const creatorEmail = currentUser ? currentUser.email : "unknown";

    const newProject = {
      projectTitle,
      projectDesc,
      id: uuidv4(),
      creator,
      creatorEmail,
      createdAt: serverTimestamp(),
      lastUpdate: serverTimestamp(),
    };

    try {
      const projectRef = doc(projectsCollectionRef, newProject.id);
      await setDoc(projectRef, newProject);
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <View>
      <CreateProject />
      {loading ? (
        <Text>Loading...</Text>
      ) : projects ? (
        <div className="activeProjectsContainer">
          <div className="activeProjectsTable">
            <TableVirtuoso
              style={{ height: 800, width: 1000 }}
              data={projects}
              fixedHeaderContent={() => (
                <tr className="userProjectList">
                  <th className="projectHeaders">ID</th>
                  <th className="projectHeaders">Project Name</th>
                  <th className="projectHeaders">Project Description</th>
                  <th className="projectHeaders">Creator</th>
                  <th className="projectHeaders">Assigned Devs</th>
                </tr>
              )}
              itemContent={(index, projects) => (
                <>
                  <td style={{ width: 25 }}>{index}</td>
                  <td className="projectTableItem">{projects.projectTitle}</td>
                  <td className="projectTableItem">{projects.projectDesc}</td>
                  <td className="projectTableItem">{projects.creator}</td>
                  <td className="projectTableItem">Work in Progress</td>
                </>
              )}
            />
          </div>
        </div>
      ) : (
        <Text>Whoops No Data Available</Text>
      )}
    </View>
  );
}

export default Projects;
