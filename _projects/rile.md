---
layout: page
title: RILe - Reinforced Imitation Learning
# description: Overview of the RILe project combining imitation and inverse reinforcement learning.
img: assets/img/publication_preview/RILe.jpg
---

<style>
  .post-title {
    text-align: center;
    margin-top: -2rem;
  }
</style>

<div class="row mt-3">
    <div class="col-md-8 offset-md-2 text-center">
        <div class="authors"> <span class="author-block"><a>Mert Albaba</a><sup>1,2</sup>,</span>
            <span class="author-block"><a>Sammy Christen</a><sup>1</sup>,</span>
            <span class="author-block"><a>Thomas Langerak</a><sup>1</sup>,</span>
            <span class="author-block"><a>Christoph Gebhardt</a><sup>1</sup>,</span> <br/>
            <span class="author-block"><a>Otmar Hilliges</a><sup>1</sup>,</span>
            <span class="author-block"><a>Michael J. Black</a><sup>2</sup></span>
        </div>
        <div class="affiliations mt-2">
            <sup>1</sup>ETH Zürich &nbsp;&nbsp; <sup>2</sup>Max Planck Institute - Intelligent Systems
        </div>
        <div class="links mt-3">
            <a href="https://arxiv.org/abs/2406.08472" class="btn btn-dark" target="_blank">
                <i class="fas fa-file-pdf"></i> Paper
            </a>
        </div>
    </div>
</div>
<hr>

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/publication_preview/RILeOverview.png" title="Overview of RL, IRL, GAIL/AIRL, and RILe" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    <b>(a) Reinforcement Learning (RL):</b> Learning a policy that maximizes a hand-defined reward function. <b>(b) Inverse RL (IRL):</b> Learning a reward function from expert data. This involves an iterative loop: 1. train a policy on the current reward function, and 2. update the reward function by comparing the policy with data. <b>(c) GAIL & AIRL:</b> Using a discriminator as a reward function. The policy is trained to fool the discriminator. AIRL introduces a specific structure (green terms) to disentangle the reward from environment dynamics. <b>(D) RILe:</b> Learning a reward function simultaneously with the policy. A trainer agent learns to generate rewards for the student agent.
</div>

<section class="section">
    <div class="row"> <div class="col-md-12"> <h2 class="title is-3">Abstract</h2> 
            <div class="content"> <p>
                Acquiring complex behaviors is essential for artificially intelligent agents, yet learning these behaviors in high-dimensional settings, like robotics, poses a significant challenge due to the vast search space. There are three main approaches that address this challenge: 1. Reinforcement learning (RL) defines a reward function, which requires extensive manual effort, 2. Inverse reinforcement learning (IRL) uncovers reward functions from expert demonstrations but relies on a computationally expensive iterative process, and 3. Imitation learning (IL) directly compares an agent's actions with expert demonstrations; however, in high-dimensional environments, such binary comparisons often offer insufficient feedback for effective learning. To address the limitations of existing methods, we introduce RILe (Reinforced Imitation Learning), a framework that learns a dense reward function efficiently and achieves strong performance in high-dimensional tasks. Building on prior methods, RILe combines the granular reward function learning of IRL and computational efficiency of IL. Specifically, RILe introduces a novel trainer-student framework: the trainer distills an adaptive reward function, and the student uses this reward signal to imitate expert behaviors. Uniquely, the trainer is a reinforcement learning agent that learns a policy for generating rewards. The trainer is trained to select optimal reward signals by distilling signals from a discriminator that judges the student's proximity to expert behavior. We evaluate RILe on general reinforcement learning benchmarks and robotic locomotion tasks, where RILe achieves state-of-the-art performance.
                </p>
            </div>
        </div>
    </div>
</section>

<section class="section">
    <div class="row"> <div class="col-md-12"> <h2 class="title is-3">Method</h2> 
            <div class="content"> <p>
                We propose <b>Reinforced Imitation Learning (RILe)</b> to jointly learn a reward function and a policy that emulates expert-like behavior within a single learning process. RILe introduces a novel trainer-student dynamic, as illustrated in Figure 2. The student agent learns an action policy by interacting with the environment, while the trainer agent learns a reward function to guide the student. Both agents are trained simultaneously using reinforcement learning, with feedback from an adversarial discriminator.
                </p>
            </div>
    </div>
</div>
<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/publication_preview/RILecopy.jpg" title="RILe Framework" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    <b>Reinforced Imitation Learning (RILe)</b>. The framework consists of a student, trainer, and discriminator. (1-2) The student policy $\pi_{S}$ interacts with the environment. (3) The student's state-action pair $(s^{S},a^{S})$ becomes the trainer's observation. (4) The trainer's policy $\pi_{T}$ outputs an action $a^{T}$, which serves as the student's reward $(r^{S}=a^{T})$. (5-6) The discriminator receives both student and expert data. (7) The discriminator then provides a reward to the trainer based on the similarity between the student and expert data.
</div>
<div class="content">
    <h3 class="mt-4">Framework Components</h3>
    <p>
        <b>Student Agent:</b> The student learns a policy $\pi_{S}$ just like in a standard Markov Decision Process (MDP). However, instead of a pre-defined reward, it is guided by the trainer's policy $\pi_{T}$. At each step, the trainer's action $a^{T}$ directly serves as the student's reward $r^{S}$. The student's goal is to maximize the expected rewards generated by the trainer.
    </p>
    <p>
        <b>Discriminator:</b> The discriminator $D_{\phi}$ is a classifier trained to distinguish between state-action pairs from the expert $\tau_{E}$ and pairs from the student $\pi_{S}$. Its objective is the standard binary cross-entropy loss used in Adversarial Imitation Learning (AIL).
    </p>
    <p>
        <b>Trainer Agent:</b> The trainer agent learns a policy $\pi_{T}$ that outputs reward signals for the student. It observes the student's state-action pair $s^{T}=(s^{S},a^{S})$ and outputs a scalar reward $a^{T}$. The trainer is, in turn, rewarded based on how well its action $a^{T}$ matches the discriminator's evaluation $D_{\phi}(s^{T})$. This setup trains the trainer to learn a reward function that effectively guides the student toward expert-like behavior.
    </p>
</div>
</section>

<section class="section">
    <div class="row"> <div class="col-md-12"> <h2 class="title is-3">Results</h2> 
            <div class="content"> <p>
                We evaluated RILe across several studies, including comparisons of computational cost, reward function dynamics, and performance on high-dimensional continuous control tasks.
                </p>
            </div>
    </div>
    <h3 class="mt-3">Performance in Continuous Control Tasks</h3>
    <p>
        We evaluated RILe on two sets of continuous control benchmarks. First, on standard MuJoCo tasks, RILe achieves the highest final reward in three of the four environments, particularly showing an advantage in the high-dimensional Humanoid task. Second, on a more challenging high-dimensional robotic locomotion benchmark (LocoMujoco) that uses noisy, state-only data, RILe obtains the highest score across all seven tasks.
    </p>
    <div class="row">
        <div class="col-sm mt-3 mt-md-0">
            {% include figure.liquid loading="eager" path="assets/img/publication_preview/table1.png" title="Table 1: Performance in Continuous Control" class="img-fluid rounded z-depth-1" %}
        </div>
    </div>
    <div class="caption">
        <b>Table 1: Performance in Continuous Control Tasks.</b> Scores are averaged over test seeds. (a) On standard MuJoCo benchmarks, RILe is competitive and excels in the high-dimensional Humanoid task. (b) On the more challenging LocoMujoco benchmark, RILe outperforms all baselines across all tasks.
    </div>
    <h3 class="mt-4">Reward Function Evaluation</h3>
    <p>
        To understand how RILe's reward-learning differs from baselines, we visualized the learned reward functions in a maze environment. Figure 4 shows that RILe's reward function dynamically adapts to the student's current policy, providing context-sensitive guidance that changes as the student improves. In contrast, the reward functions of GAIL and AIRL (which are tied directly to the discriminator output) remain relatively static throughout training.
    </p>
    <div class="row">
        <div class="col-sm mt-3 mt-md-0">
            {% include figure.liquid loading="eager" path="assets/img/publication_preview/figure4.jpg" title="Figure 4: Reward Function Comparison" class="img-fluid rounded z-depth-1" %}
        </div>
    </div>
    <div class="caption">
        <b>Figure 4: Reward Function Comparison.</b> Evolution of reward functions during training for (a) RILe, (b) GAIL, and (c) AIRL in a maze environment. Columns show reward landscapes at 25%, 50%, 75%, and 100% of training. The expert's trajectory is in black, and the student's is in white. RILe's reward landscape (a) clearly adapts over time to guide the student.
    </div>
    <h3 class="mt-4">Computational Cost and Performance Trade-offs</h3>
    <p>
        We compared RILe's computational cost against AIL (GAIL) and IRL (GCL, REIRL) methods. As shown in Figure 5, GAIL is computationally efficient but achieves limited peak performance, especially in complex tasks. Conversely, IRL methods achieve high rewards but require orders of magnitude more gradient steps. RILe successfully bridges this gap, achieving the high performance characteristic of IRL while maintaining sample efficiency much closer to that of AIL.
    </p>
    <div class="row">
        <div class="col-sm mt-3 mt-md-0">
            {% include figure.liquid loading="eager" path="assets/img/publication_preview/figure5.jpg" title="Figure 5: Comparison of Computational Cost" class="img-fluid rounded z-depth-1" %}
        </div>
    </div>
    <div class="caption">
        <b>Figure 5: Comparison of Computational Cost.</b> Evaluation of computational cost (gradient steps) versus performance (episode reward) for RILE, GAIL, GCL, and REIRL across four MuJoCo Playground tasks. RILe (blue) achieves high rewards similar to IRL methods (green, red) but with the efficiency of AIL (orange).
    </div>
    <h3 class="mt-4">Impact of Advanced Discriminators</h3>
    <p>
        The quality of the discriminator is critical. We analyzed this by replacing the standard discriminator in both RILe and GAIL with a more advanced diffusion-based model (from DRAIL). As shown in Figure 6, RILe (orange) effectively leverages the advanced discriminator (red) to improve its final performance. In contrast, GAIL's performance remains stable, suggesting it cannot capitalize on the better feedback. Furthermore, RILe's reward signal (CPR, plot c) maintains a positive correlation with true task performance, while GAIL's reward signal eventually becomes misaligned (negative correlation).
    </p>
    <div class="row">
        <div class="col-sm mt-3 mt-md-0">
            {% include figure.liquid loading="eager" path="assets/img/publication_preview/figure6.png" title="Figure 6: Impact of an Advanced Discriminator" class="img-fluid rounded z-depth-1" %}
        </div>
    </div>
    <div class="caption">
        <b>Figure 6: Impact of an Advanced Discriminator.</b> Plots (a-c) analyze reward dynamics, and (d) compares final performance. <b>(a) RFDC (Reward Function Distribution Change):</b> Measures the overall volatility of the reward function. <b>(b) FS-RFDC (Fixed-State RFDC):</b> Measures reward volatility on a fixed set of expert data. <b>(c) CPR (Correlation between Performance and Reward):</b> Measures how well reward improvements align with gains in student performance. RILe effectively uses the advanced (DRAIL) discriminator to improve performance, while GAIL does not.
    </div>
</section>

<section class="section" id="BibTeX">
    <div class="is-max-desktop content">
    <h2 class="title">BibTeX</h2>
    <pre><code>@misc{albaba2025rilereinforcedimitationlearning,
      title={RILe: Reinforced Imitation Learning}, 
      author={Mert Albaba and Sammy Christen and Thomas Langarek and Christoph Gebhardt and Otmar Hilliges and Michael J. Black},
      year={2025},
      eprint={2406.08472},
      archivePrefix={arXiv},
      primaryClass={cs.LG},
      url={https://arxiv.org/abs/2406.08472}, 
    }</code></pre>
    </div>
</section>
