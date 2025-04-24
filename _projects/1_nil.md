---
layout: page
title: NIL - No-data Imitation Leatning
description:
img: assets/img/publication_preview/NIL.jpg
importance: 1
category: work
related_publications: true
---

<section class="hero">
    <div class="hero-body">
    <div class="is-max-desktop">
        <div class="columns is-centered">
        <div class="column has-text-centered">
        <div class="publication-authors">
            <span class="author-block">
                <a>Mert Albaba</a><sup>1,2</sup>,</span>
            <span class="author-block">
                <a>Chenhao Li</a><sup>1</sup>,</span>
            <span class="author-block">
                <a>Markos Diomataris</a><sup>1,2</sup>,</span>
            <span class="author-block">
                <a>Omid Taheri</a><sup>2</sup>,</span> <br/>
            <span class="author-block">
                <a>Andreas Krause</a><sup>1</sup>,</span>
            <span class="author-block">
                <a>Michael J. Black</a><sup>2</sup>
            </span>
        </div>
        <div class="publication-authors affiliations">
            <div class="affiliation-item"><sup>1</sup>ETH Zürich</div>
            <div class="affiliation-item"><sup>2</sup>Max Planck Institute - Intelligent Systems</div>
        </div>
        <div class="column has-text-centered">
            <div class="publication-links">
                <!-- PDF Link. -->
                <span class="link-block">
                <a
                    href="https://arxiv.org/abs/2406.08472"
                    class="external-link button is-normal is-rounded is-dark"
                    target="_blank"
                >
                    <span class="icon">
                    <i class="fas fa-file-pdf"></i>
                    </span>
                    <span>Paper</span>
                </a>
                </span>
            </div>
        </div>
    </div>
    </div>

</section>

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/publication_preview/NIL.jpg" title="" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    <b>NIL Overview:</b> First, from a single frame and a textual prompt, a pre-trained video diffusion model generates a reference video. Reinforcement learning policies are then trained to imitate the generated video and control various robots without using any external data.
</div>

<section class="section">
    <div class="is-max-desktop">
    <!-- Abstract. -->
    <div class="columns is-centered has-text-centered">
        <div class="column is-four-fifths">
        <h2 class="title is-3">Abstract</h2>
        <div class="content has-text-justified">
            <p>
            Acquiring physically plausible motor skills across diverse and unconventional morphologies—including humanoid robots, quadrupeds, and animals—is essential for advancing character simulation and robotics. Traditional methods, such as reinforcement learning (RL) are task- and body-specific, require extensive reward function engineering, and do not generalize well. Imitation learning offers an alternative but relies heavily on high-quality expert demonstrations, which are difficult to obtain for non-human morphologies. Video diffusion models, on the other hand, are capable of generating realistic videos of various morphologies, from humans to ants. Leveraging this capability, we propose a data-independent approach for skill acquisition that learns 3D motor skills from 2D-generated videos, with generalization capability to unconventional and non-human forms. Specifically, we guide the imitation learning process by leveraging vision transformers for video-based comparisons by calculating pair-wise distance between video embeddings. Along with video-encoding distance, we also use a computed similarity between segmented video frames as a guidance reward. We validate our method on locomotion tasks involving unique body configurations. In humanoid robot locomotion tasks, we demonstrate that ``No-data Imitation Learning" (NIL) outperforms baselines trained on 3D motion-capture data. Our results highlight the potential of leveraging generative video models for physically plausible skill learning with diverse morphologies, effectively replacing data collection with data generation for imitation learning.
            </p>
        </div>
        </div>
    </div>
    </div>
</section>

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/publication_preview/NIL_method.jpg" title="" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    <b>NIL:</b> No-data Imitation Learning consists two stages. <i>Stage 1:</i> Render the agent’s initial frame, remove the background, and generate a reference video using a pre-trained video diffusion model conditioned on the initial frame and a textual task description. <i>Stage 2:</i> Train a reinforcement learning agent in a physical simulation to imitate the generated video via a reward function comprising (1) video encoding similarity, (2) segmentation mask IoU, and (3) regularization for smooth behavior.
</div>

<section class="section" id="BibTeX">
    <div class="is-max-desktop content">
    <h2 class="title">BibTeX</h2>
    <pre><code>@misc{albaba2025nilnodataimitationlearning,
      title={NIL: No-data Imitation Learning by Leveraging Pre-trained Video Diffusion Models}, 
      author={Mert Albaba and Chenhao Li and Markos Diomataris and Omid Taheri and Andreas Krause and Michael Black},
      year={2025},
      eprint={2503.10626},
      archivePrefix={arXiv},
      primaryClass={cs.CV},
      url={https://arxiv.org/abs/2503.10626}, 
    }</code></pre>
    </div>
</section>
