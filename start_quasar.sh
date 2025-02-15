#!/bin/bash
# Get WSL2 IP
WSL_IP=$(ip addr show eth0 | grep "inet " | awk '{print $2}' | cut -d/ -f1)
echo "WSL2 IP: $WSL_IP"

# Start Quasar
quasar dev --port 8080 &
QUASAR_PID=$!

# Set up adb reverse
adb reverse tcp:8080 tcp:8080
echo "ADB reverse set up. Access the app at http://localhost:8080 in the emulator."

# Wait for user to terminate
wait $QUASAR_PID

