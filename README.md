# PlanA DevOps Challenge 1


* [Quickstart](#quickstart)
* [Overview](#overview)
* [Environment](#environment)

## Quickstart 

The following steps are using K3D tool to run Kubernetes. You can use another as your preference like Minikube, MicroK8s, etc.

To run in our own environment:
    1. Fork the project to your own repository;
    2. Install docker: https://docs.docker.com/get-docker/
    3. Install kubectl: https://kubernetes.io/docs/tasks/tools/#kubectl
    4. Install k3d: https://k3d.io/v5.4.1/#installation . You can use other 
    5. k3d cluster create -p "8080:30000@loadbalancer"