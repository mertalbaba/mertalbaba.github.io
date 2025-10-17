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
            <span class="author-block"><a>Marco Bagatella</a><sup>1,2 &#42;</sup>,</span>
            <span class="author-block"><a>Mert Albaba</a><sup>1, 2 &#42;</sup>,</span>
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
        {% include figure.liquid loading="eager" path="assets/img/publication_preview/GCTTTOverview.png" title="GC-TTT Overview Figure" class="img-fluid rounded z-depth-1" %}
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

<hr>

<section class="section">
    <div class="row">
        <div class="col-md-12">
            <h2 class="title is-3">Method: Goal-conditioned Test-time Training (GC-TTT)</h2>
            <div class="content">
                <p>
                    We propose to dynamically fine-tune the policy during evaluation, using data from the pre-training dataset $\mathcal{D}$. Our method, <strong>Goal-conditioned Test-time Training (GC-TTT)</strong>, carefully selects a subset of data $\mathcal{D}(s, g^*)$ that is "close" to the agent's current state $s$ and "optimal" for reaching its current goal $g^*$. The policy is then fine-tuned on this small, specialized dataset for a few gradient steps.
                </p>
                <p>
                    This process has two key components:
                </p>
                <ol>
                    <li><strong>What to train on? (Data Selection)</strong>: We first filter the dataset to find sub-trajectories that are <strong>relevant</strong> to the agent's current state, i.e., trajectories that start nearby (using a distance function $d(s, s_1) < \epsilon$). Then, we filter these relevant trajectories to find the ones that are most <strong>optimal</strong> for the <i>current test goal</i> $g^*$. We measure optimality using an H-step return estimate, $\hat{V}$, which combines the rewards along the sub-trajectory with the critic's value estimate of its final state. We select the trajectories in the top $q$-th percentile of this value.</li>
                    <li><strong>When to train? (Receding Horizon Training)</strong>: We apply this fine-tuning process in a <strong>receding-horizon</strong> fashion. Every $K$ steps, we reset the policy weights back to the original pre-trained ones. We then perform data selection based on the <i>new</i> current state and fine-tune the policy again. This allows the agent to dynamically adapt its policy as it moves through the environment and correct for any deviations.</li>
                </ol>
            </div>
        </div>
    </div>
    <div class="row">
        <div class="col-sm mt-3 mt-md-0">
            {% include figure.liquid loading="eager" path="assets/img/publication_preview/GCTTT_method.png" title="GC-TTT Method Diagram" class="img-fluid rounded z-depth-1" %}
        </div>
    </div>
    <div class="caption">
        GC-TTT specializes the agent to the next steps for achieving its target goal by selecting relevant and optimal data from the pre-training dataset.
    </div>
</section>

<hr>

<section class="section">
    <div class="row">
        <div class="col-md-12">
            <h2 class="title is-3">Results</h2>
            <div class="content">
                <p>
                    We evaluated GC-TTT on a range of loco-navigation (pointmaze, antmaze, humanoidmaze) and manipulation (cubesingle) tasks from OGBench. As shown in Table 1, GC-TTT provides substantial improvements when applied on top of various offline RL backbones (GC-BC, GC-IQL, and SAW). On average, GC-TTT improved the success rate of <strong>GC-BC from 0.23 to 0.58 (+152.2%)</strong> and <strong>GC-IQL from 0.39 to 0.63 (+61.5%)</strong>.
                </p>
            </div>
        </div>
    </div>
    <div class="row">
        <div class="col-sm mt-3 mt-md-0">
            {% include figure.liquid loading="eager" path="assets/img/publication_preview/table1gcttt.jpg" title="Main Results Table" class="img-fluid rounded z-depth-1" %}
        </div>
    </div>
    <div class="caption">
        <strong>Table 1:</strong> Success rates of GC-TTT (and its critic-free variant) on top of GC-BC, GC-IQL, and SAW backbones. GC-TTT consistently and significantly improves performance across tasks and algorithms.
    </div>
    <div class="row mt-5">
        <div class="col-md-12">
            <h3 class="title is-4">Ablation Studies</h3>
            <div class="content">
                <p>
                    We conducted several ablations to understand <i>why</i> GC-TTT works. We found:
                </p>
                <ul>
                    <li><strong>Data selection is crucial (Fig. 6, left)</strong>: Both relevance and optimality filters are necessary. Training on random data, or data that is only relevant but not optimal (or vice-versa), fails to produce significant gains.</li>
                    <li><strong>TTT frequency matters (Fig. 6, middle)</strong>: Performance scales with the frequency of test-time updates. More complex environments like Antmaze benefit from more frequent updates (e.g., every 100 steps).</li>
                    <li><strong>GC-TTT scales better than model size (Fig. 6, right)</strong>: We compared allocating more compute at test-time by (a) increasing TTT frequency or (b) scaling the policy network size. GC-TTT (blue line) consistently outperforms simple model scaling (grey line) at matched inference FLOPs.</li>
                </ul>
            </div>
        </div>
    </div>
    <div class="row">
        <div class="col-sm mt-3 mt-md-0">
            {% include figure.liquid loading="eager" path="assets/img/publication_preview/figure6gcttt.jpg" title="Ablation Studies Figure" class="img-fluid rounded z-depth-1" %}
        </div>
    </div>
    <div class="caption">
        <strong>Figure 6:</strong> Ablation studies on data selection (left), TTT frequency (middle), and compute scaling (right).
    </div>
</section>

<hr>

<section class="section" id="BibTeX">
    <div class="is-max-desktop content">
    <h2 class="title">BibTeX</h2>
    <pre><code>@misc{bagatella2025testtime,
      title={Test-time Offline Reinforcement Learning on Goal-related Experience}, 
      author={Marco Bagatella* and Mert Albaba* and Jonas Hübotter and Georg Martius and Andreas Krause},
      year={2025},
      eprint={2507.18809},
      archivePrefix={arXiv},
      primaryClass={cs.LG},
      url={https://arxiv.org/abs/2507.18809}, 
    }</code></pre>
    </div>
</section>