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
                4. Install k3d: https://k3d.io/v5.4.1/#installation.
                5. k3d cluster create NAME_YOUR_CLUSTER -p "8080:30000@loadbalancer"
                6. kubectl apply -f kubernetes/deployment.yaml
                7. In your browser you can access http://0.0.0.0:8080 or curl 0.0.0.0:8080 and you will receive the desired out of this challenge:

```json
{
  "timestamp": "<current date and time>",
  "hostname": "<Name of the host (IP also accepted)>",
  "engine": "<Name and/or version of the engine running>",
  "visitor ip": "<the IP address of the visitor>"
}
```
    
    
## Overview
