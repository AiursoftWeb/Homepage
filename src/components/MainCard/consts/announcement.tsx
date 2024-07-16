export const announcement =
  `
## NPM Server

If you want to speed up the download of NPM packages, you can use Aiursoft's NPM server. It is a simple and easy-to-use NPM server that does not require registration. You can use it to download NPM packages with just a few clicks.

\`\`\`bash
npm set registry https://npm.aiursoft.cn/
\`\`\`

Or you can create a new \`.npmrc\` file in your project root directory and add the following content:

\`\`\`
registry=https://npm.aiursoft.cn/
\`\`\`

## File transfer

If you want to transfer a photo from your PC to your phone, what do you do?

You can use Aiursoft's file transfer service. It is a simple and easy-to-use file transfer service that does not require registration. You can transfer files between devices with just a few clicks.

Try it here! [https://drive.aiursoft.cn/](https://drive.aiursoft.cn/)

## Chess server

We built a new chess server. You can experience it at [https://chess.aiursoft.cn/](https://chess.aiursoft.cn/).

The entire server is built on the latest technology stack, including:

* .NET 8
* ASP.NET Core
* WebSockets

And it is fully containerized, orchestrated by Docker Swarm, and deployed by GitLab CI/CD. It is also open-source, and you can view the source code at [https://gitlab.aiursoft.cn/aiursoft/chessserver](https://gitlab.aiursoft.cn/aiursoft/chessserver).

Online gaming with friends is a great way to relax. We hope you enjoy it!

## Comprehensive Containerization

To facilitate maintenance, expansion, testing, and deployment, we are fully containerizing all services in our data center. This requires a declarative reconstruction of the entire data center.

We are using Docker to containerize all services and Docker Swarm for service orchestration. Ultimately, all declarative code is committed to [GitLab](https://gitlab.aiursoft.cn/aiursoft/box), utilizing GitLab CI/CD for automated building, testing, and deployment.

Yes, the entire project is now complete, and users will not notice any changes. However, for us, this is a significant advancement.

## Information Security Practices and Inspections

To ensure the security of the data center, we are conducting a series of security checks and practices.

We have implemented several security measures, including but not limited to:

* Enabling HSTS
* Enforcing DNSSEC
* Enforcing site-wide DNSCAA
* Achieving an SSLABS A+ rating

We have also implemented several experience-related measures, including but not limited to:

* Enabling HTTP/3 based on QUIC
* Supporting IPv6
* Using Brotli compression algorithm
* Using BBR for congestion control optimization and cake for queue management optimization

Additionally, we have compiled a [Web Application Development Checklist](https://anduin.aiursoft.cn/post/2024/3/1/web-checklist) for reference.

## Package Management Acceleration

To speed up the download of various Docker, NuGet, APT, and NPM packages for developers, Aiursoft is building a series of mirror sites for official sources.

Click the "Package Repository" button in the square below to experience it!

## Run It! CppRunner!

Are you often asked how to set up a development environment? Have you found a piece of fragmented code and want to see the results? Quickly scratched out a function and are unsure if it's correct?

Yes! Many times you don't want to set up a development environment, or you just want to quickly run the code to see the result. At this time, you need CppRunner! Although it's called CppRunner, it's actually a general code runner that supports 17 common languages.

You can experience it at [https://cpprunner.aiursoft.cn/](https://cpprunner.aiursoft.cn/).

Now you have a blessing to quickly scratch out some code for testing! I hope it can help you and your friends improve efficiency and also help countless beginners quickly verify their code.

**CppRunner Bounty Hacking Contest**

CppRunner is an open-source project, and we want to challenge the construction of a secure remote code execution environment. If you can use it to:

* Access the host's confidential file "/etc/fstab"
* Send any network request to a third-party server
* Crash the server (excluding DDOS)

You have found a security vulnerability! We will immediately award a prize of 2048 yuan. Please send the vulnerability to [anduin@aiursoft.com](mailto://anduin@aiursoft.com). Please include detailed reproduction steps.

By this announcement, Aiursoft authorizes everyone to hack into the CppRunner server in any way, and this behavior will not be considered a violation of Aiursoft's terms of service nor any law.

## Gist Snippet Service

We have deployed a Gist service. You can experience it at [https://gist.aiursoft.cn/](https://gist.aiursoft.cn/).

Gist is a code snippet sharing service. You can share your code snippets here, and you can also view code snippets shared by others. Compared to creating a complete code repository, which is often unnecessary for just archiving an interesting small code, Gist is a great choice.

## ManHours Calculator

We have developed a ManHours calculator that quickly helps you calculate the total time spent developing a project.

Simply open [ManHours](https://manhours.aiursoft.cn), paste your Git repository link, and quickly calculate the total person-hours spent developing your project.

You can paste the calculated result as a Badge into your project's README to show the development time of your project.

(Note: Only public repositories are supported)

## Monitor PPI Calculator

We have developed a Monitor PPI calculator that helps you quickly calculate the PPI of your monitor.

This can effectively help you choose a monitor or calculate the PPI value of your monitor. Next time you buy a laptop or desktop monitor, you can choose one with a PPI that is an integer multiple of 96 to avoid scaling issues~

Enter your resolution and screen size to get your monitor's PPI value, and calculate the display text size based on your input scaling ratio.

Open [https://anduin.aiursoft.cn/page/scale](https://anduin.aiursoft.cn/page/scale) to experience it!

## Remote Desktop Connection Solution

To quickly help others solve problems, we have built a fast screen sharing and remote desktop connection solution that requires no registration or complex configuration.

Click "Remote Desktop Connection" on the right to experience it with your friends!

We reviewed all the open-source code before construction to ensure the project has no malicious logic.

## Avoid Microsoft

Considering the recent [numerous bugs in Windows](https://borncity.com/win/2023/02/20/windows-server-2022-feb-2023-patchday-secure-boot-issues-also-on-bare-metal-systems/), with several major incidents caused by Windows bugs, and the difficulty of using open-source technologies for scheduling, monitoring, and managing Windows Server, we are avoiding the use of Windows Server and Microsoft's peripheral solutions altogether.

In the future, we will only allow Linux servers to access the data center and only use open-source solutions (except for game servers). We adhere to five principles:

* EverGreen (no outdated software and libraries)
* EverOpenSource (no closed-source software)
* EverKnown (no designs with unknown purposes)
* EverClean (no meaningless data)
* EverReproducible (no non-reproducible designs)

## ZFS

Considering the maturity of the ZFS solution for data center storage, and its ability to provide secure, massive, high-speed, easy snapshot, and easy cache storage devices, we are restructuring the data center's storage structure, completely abandoning the RAID card + ext4 solution in favor of ZFS.

## GPU

We are still focusing on increasing GPU computing power for the data center. This requires overcoming many challenges, including obtaining vGPU licenses, designing mdev GPU virtualization solutions, solving GPU virtualization driver issues, monitoring, allocation, scheduling, and more.
`;

