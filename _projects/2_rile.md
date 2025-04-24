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
        {% include figure.liquid loading="eager" path="assets/img/publication_preview/RILeOverview.png" title="" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    <b>(a) Reinforcement Learning (RL):</b> learning a policy that maximizes hand-defined reward function; <b>(b) Inverse RL (IRL):</b> learning a reward function from data. IRL has two stages: 1. training a policy with frozen reward function, and 2. updating the reward function by comparing the converged policy with data. These stages repeated several times; <b>(C) Generative Adversarial Imitation Learning (GAIL) + Adversarial IRL (AIRL):</b> using discriminator as a reward function. GAIL trains both policy and the discriminator at the same time. AIRL implements a new structure on the discriminator, seperating reward from environment dynamics by using two networks under the discriminator (see additional terms in green). <b>(D) RILe:</b> similar to IRL, learning a reward function from data. RILe learns the reward function at the same time with the policy, using a discriminator as a guide for learning the reward.
</div>

<section class="section">
    <div class="row"> <div class="col-md-12"> <h2 class="title is-3">Abstract</h2> 
            <div class="content"> <p>
                Acquiring complex behaviors is essential for artificially intelligent agents, yet learning these behaviors in high-dimensional settings poses a significant challenge due to the vast search space. Traditional reinforcement learning (RL) requires extensive manual effort for reward function engineering. Inverse reinforcement learning (IRL) uncovers reward functions from expert demonstrations but relies on an iterative process that is often computationally expensive. Imitation learning (IL) provides a more efficient alternative by directly comparing an agent’s actions to expert demonstrations; however, in high-dimensional environments, such direct comparisons often offer insufficient feedback for effective learning. We introduce RILe (Reinforced Imitation Learning), a framework that combines the strengths of imitation learning and inverse reinforcement learning to learn a dense reward function efficiently and achieve strong performance in high-dimensional tasks. RILe employs a novel trainer–student framework: the trainer learns an adaptive reward function, and the student uses this reward signal to imitate expert behaviors. By dynamically adjusting its guidance as the student evolves, the trainer provides nuanced feedback across different phases of learning. Our framework produces high-performing policies in high-dimensional tasks where direct imitation fails to replicate complex behaviors. We validate RILe in challenging robotic locomotion tasks, demonstrating that it significantly outperforms existing methods and achieves near-expert performance across multiple settings.
                </p>
            </div>
        </div>
    </div>
</section>

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/publication_preview/RILe.jpg" title="" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    <b>Reinforced Imitation Learning (RILe)</b>. The framework consists of three key components: a student agent, a trainer agent, and a discriminator. The student agent learns a policy by interacting with an environment, and the trainer agent learns a reward function as a policy. (1) The student receives the environment state. (2) The student takes an action, forwards it to the environment which is updated based on the action. (3) The student forwards its state and action to the trainer, whose state is the state action pair of the student. (4) Trainer evaluates the state action pair of the student agent and chooses a scalar action that then becomes the reward of the student agent. (5) The trainer agent forwards the state action pair of the student to the discriminator. (6) Discriminator compares student state-action pair with expert demonstrations. (7) Discriminator gives reward to the trainer, based on the similarity between student- and expert-behavior.
</div>

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




---
layout: page
permalink: /routeformer/
title: Leveraging Driver Field-of-View for Multimodal Ego-Trajectory Prediction
nav: false
---
