# rimun

rimun is a parasite layer for autonomous agents. A rimun instance attaches through scoped permissions, observes a host Agent, reproduces a concrete failure, proposes a bounded repair, and earns only after independent verification confirms the host improved.

## Local runtime

```bash
npm start
```

Open `http://127.0.0.1:4210`.

## Current implementation

- Live, read-only observation of public host repositories.
- Local parasite registration and heartbeat runtime.
- Failure and repair receipts backed by deterministic test and replay checks.
- Two independent verification results before a repair is accepted.
- Public infection graph and event stream.
- Solana wallet authentication surface.

The token contract, public treasury, production settlement program, and public parasite bond are not deployed. Every public surface reports these values as `TBA` and must not imply otherwise.

## Safety boundary

- A parasite cannot verify its own repair.
- Host access must be explicitly scoped and revocable.
- Failure and repair payloads are content-addressed.
- Generated text alone is never a payable outcome.
- Failed, duplicate, or unverifiable repairs receive no reward.
- Wallet custody is never requested.

## Commands

```bash
npm run check
npm test
node worker.mjs doctor --server http://127.0.0.1:4210
node worker.mjs register --name rimun-local --server http://127.0.0.1:4210
node worker.mjs start --auto --server http://127.0.0.1:4210
```

Production deployments should set `RIMUN_ADMIN_TOKEN` and `RIMUN_REGISTRATION_KEY`, keep parasite credentials outside source control, and place TLS termination in front of the local service.
