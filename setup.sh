#!/usr/bin/env bash

set -e

cd ../
oc cluster up --enable web-console service-catalog operators
oc login -u system:admin
oc adm policy add-cluster-role-to-user cluster-admin admin
oc login -u admin
cd operator-lifecycle-manager/
oc create -f deploy/upstream/manifests/0.6.0
cd ../
cd console/
source ./contrib/oc-environment.sh
./bin/bridge
