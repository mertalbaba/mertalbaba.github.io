---
layout: page
title: GC-TTT - Test-time Offline Reinforcement Learning on Goal-related Experience
# description: Overview of the RILe project combining imitation and inverse reinforcement learning.
img: assets/img/publication_preview/GCTTT.png
---

<style>
  .post-title {
    text-align: center;
    margin-top: -2rem;
  }
</style>

<div class="row mt-3">
    <div class="col-md-8 offset-md-2 text-center">
        <div class="authors">
            <span class="author-block"><a>Marco Bagatella</a><sup>1,2$\ast$</sup>,</span>
            <span class="author-block"><a>Mert Albaba</a><sup>1, 2$\ast$</sup>,</span>
            <span class="author-block"><a>Jonas Hübotter</a><sup>1</sup>,</span>
            <span class="author-block"><a>Georg Martius</a><sup>2,3</sup>,</span> <br/>
            <span class="author-block"><a>Andreas Krause</a><sup>1</sup>,</span>
        </div>
        <div class="equal-contribution-note mt-1">
            $\ast$ Equal contribution.
        </div>
        <div class="affiliations mt-2">
            <sup>1</sup>ETH Zürich &nbsp;&nbsp; <sup>2</sup>Max Planck Institute - Intelligent Systems &nbsp;&nbsp; <sup>3</sup>University of Tübingen
        </div>
        <div class="links mt-3">
            <a href="https://arxiv.org/abs/2507.18809" class="btn btn-dark" target="_blank">
                <i class="fas fa-file-pdf"></i> Paper
            </a>
        </div>
    </div>
</div>
<hr>

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/publication_preview/GCTTTOverview.png" title="" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    We introduce test-time training in the context of offline goal-conditioned reinforcement learning. The same data used for pre-training is filtered and leveraged to improve the policy locally during evaluation. This results in significant performance gains in standard benchmarks (left) when combined with common offline RL backbones, GC-BC, GC-IQL, and SAW.
</div>

<section class="section">
    <div class="row"> <div class="col-md-12"> <h2 class="title is-3">Abstract</h2> 
            <div class="content"> <p>
                Foundation models compress a large amount of information in a single, large neural network, which can then be queried for individual tasks. There are strong parallels between this widespread framework and offline goal-conditioned reinforcement learning algorithms: a universal value function is trained on a large number of goals, and the policy is evaluated on a single goal in each test episode. Extensive research in foundation models has shown that performance can be substantially improved through test-time training, specializing the model to the current goal. We find similarly that test-time offline reinforcement learning on experience related to the test goal can lead to substantially better policies at minimal compute costs. We propose a novel self-supervised data selection criterion, which selects transitions from an offline dataset according to their relevance to the current state and quality with respect to the evaluation goal. We demonstrate across a wide range of high-dimensional loco-navigation and manipulation tasks that fine-tuning a policy on the selected data for a few gradient steps leads to significant performance gains over standard offline pre-training. Our goal-conditioned test-time training (GC-TTT) algorithm applies this routine in a receding-horizon fashion during evaluation, adapting the policy to the current trajectory as it is being rolled out. Finally, we study compute allocation at inference, demonstrating that, at comparable costs, GC-TTT induces performance gains that are not achievable by scaling model size.
                </p>
            </div>
        </div>
    </div>
</section>

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/publication_preview/GCTTT_method.png" title="" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    GC-TTT specializes the agent to the next steps for achieving its target goal.
</div>

<section class="section" id="BibTeX">
    <div class="is-max-desktop content">
    <h2 class="title">BibTeX</h2>
    <pre><code>@misc{bagatella2025testtime,
      title={Test-time Offline Reinforcement Learning on Goal-related Experience}, 
      author={Mert Albaba and Marco Bagatella and Jonas Hübotter and Georg Martius and Andreas Krause},
      year={2025},
      eprint={2507.18809},
      archivePrefix={arXiv},
      primaryClass={cs.LG},
      url={https://arxiv.org/abs/2507.18809}, 
    }</code></pre>
    </div>
</section>


