#!/bin/bash

PIDS=()

for i in {8000..8020}
do
    node server.js $i &
    PID=$!
    PIDS+=("$PID")
done

kill_all()
{
    for i in "${PIDS[@]}"
    do
        echo "Killing PID: $i"
        kill $i
    done
}


trap kill_all 2
sleep infinity
